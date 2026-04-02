// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SELECT count(1) from "datasetname"
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

