// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiStatisticsPathField extends $dara.Model {
  /**
   * @remarks
   * The category to which the field belongs, used for grouping and organizing fields.
   */
  category?: string;
  /**
   * @remarks
   * A detailed description that provides additional context about the field\\"s purpose and usage.
   */
  description?: string;
  /**
   * @remarks
   * The unique key used to identify the field in statistical results.
   */
  fieldKey?: string;
  /**
   * @remarks
   * Specifies whether the field is an input or an output. Valid values are typically `IN` or `OUT`.
   */
  io?: string;
  /**
   * @remarks
   * The JSONPath expression to extract the field value from the source data.
   */
  jsonPath?: string;
  /**
   * @remarks
   * The display name of the field, used for labeling in user interfaces or reports.
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether logging is enabled for this field. If set to `true`, the system records the field\\"s value in logs.
   */
  recordEnabled?: boolean;
  /**
   * @remarks
   * A rule or condition applied to the extracted field. The rule\\"s format and effect are implementation-specific.
   */
  rule?: string;
  /**
   * @remarks
   * Indicates whether the field contains sensitive information. If set to `true`, the system may apply masking or other security measures.
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The data source from which the field is extracted. For example, `Request` or `Response`.
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      fieldKey: 'fieldKey',
      io: 'io',
      jsonPath: 'jsonPath',
      name: 'name',
      recordEnabled: 'recordEnabled',
      rule: 'rule',
      sensitive: 'sensitive',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      fieldKey: 'string',
      io: 'string',
      jsonPath: 'string',
      name: 'string',
      recordEnabled: 'boolean',
      rule: 'string',
      sensitive: 'boolean',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

