// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionResourceForFrontRequest extends $dara.Model {
  /**
   * @example
   * VIEW
   */
  action?: string;
  /**
   * @example
   * 41
   */
  enterpriseId?: string;
  /**
   * @example
   * 292758960042264423
   */
  operatorId?: string;
  /**
   * @example
   * DEVELOPER
   */
  operatorType?: string;
  /**
   * @example
   * CONTAIN_MATCH
   */
  queryType?: string;
  /**
   * @example
   * neuron:catalog:company/1
   */
  resourcePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      enterpriseId: 'enterpriseId',
      operatorId: 'operatorId',
      operatorType: 'operatorType',
      queryType: 'queryType',
      resourcePrefix: 'resourcePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      enterpriseId: 'string',
      operatorId: 'string',
      operatorType: 'string',
      queryType: 'string',
      resourcePrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

