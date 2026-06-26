// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataField } from "./DataField";


export class ViewSchema extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Queries for different engines.
   */
  dialects?: { [key: string]: string };
  /**
   * @remarks
   * The list of field definitions for the view.
   */
  fields?: DataField[];
  /**
   * @remarks
   * The configuration parameters for the view.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The default query for the view.
   * 
   * @example
   * select id from t1;
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      dialects: 'dialects',
      fields: 'fields',
      options: 'options',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      dialects: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      fields: { 'type': 'array', 'itemType': DataField },
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      query: 'string',
    };
  }

  validate() {
    if(this.dialects) {
      $dara.Model.validateMap(this.dialects);
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

