// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataChecklist extends $dara.Model {
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The message returned for verification.
   * 
   * @example
   * The ID of the region.
   */
  remark?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * vpc
   */
  resourceCode?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * vpc
   */
  resourceName?: string;
  /**
   * @remarks
   * The verification result.
   * 
   * @example
   * Finish
   */
  result?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 192.168.0.0/16
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycle: 'Lifecycle',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceName: 'ResourceName',
      result: 'Result',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycle: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
      resourceName: 'string',
      result: 'string',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

