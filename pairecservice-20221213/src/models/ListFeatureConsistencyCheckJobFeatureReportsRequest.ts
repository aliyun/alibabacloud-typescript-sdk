// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobFeatureReportsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9010
   */
  logItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1010
   */
  logUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

