// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePopApiRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Alibaba Cloud product API.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeInstanceInfo
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud product API.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      popCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

