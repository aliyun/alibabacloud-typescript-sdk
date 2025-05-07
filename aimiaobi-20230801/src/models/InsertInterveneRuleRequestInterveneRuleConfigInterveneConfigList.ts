// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * 37249
   */
  id?: string;
  /**
   * @example
   * 0
   */
  operationType?: number;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operationType: 'OperationType',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operationType: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

