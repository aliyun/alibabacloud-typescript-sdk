// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveModelAmbiguity extends $dara.Model {
  /**
   * @remarks
   * The list of candidate options. **The shape is determined by `type`**. Both shapes include an `id` (such as `o1` or `o2`) for the caller to pass back the selection. When `type=semantic`, each item contains exactly four fields: `id` / `label` / `description` / `context`, where `context` has the same structure as the top-level `context` in the response (**note that the candidate item itself is not a context but a wrapper around it**). When `type=data_source`, each item contains exactly two fields: `id` / `dataSource`, with the physical coordinates embedded in `dataSource` (including `region` / `project` / `logstore`), **not flattened at the top level of the candidate item**. Each item is an **open object**. The server may add or remove fields as the semantic layer evolves. Callers should read fields as needed and tolerate unknown fields.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"id": "o1", "dataSource": {"region": "cn-hangzhou", "project": "order-logs-a", "logstore": "orders"}}, {"id": "o2", "dataSource": {"region": "cn-hangzhou", "project": "order-logs-b", "logstore": "orders"}}]
   */
  options?: { [key: string]: any }[];
  /**
   * @remarks
   * A clarification question for the caller. You can display it directly to the user or a downstream agent to make a selection from `options`.
   * 
   * This parameter is required.
   * 
   * @example
   * Select the data source for this query
   */
  question?: string;
  /**
   * @remarks
   * The ambiguity type. Valid values: `semantic` (the question semantically points to multiple candidate contexts) or `data_source` (the semantics are unique but map to multiple physical data source coordinates). Note that the value `data_source` of this field is not the same as the top-level `dataSource` field in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * data_source
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
      question: 'question',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      question: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

