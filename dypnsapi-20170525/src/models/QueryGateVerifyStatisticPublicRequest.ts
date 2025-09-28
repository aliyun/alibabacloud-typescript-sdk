// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyStatisticPublicRequest extends $dara.Model {
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **1**: one-click logon
   * *   **2**: phone number verification, including the verification of the phone number used in HTML5 pages
   * *   **3**: SMS verification
   * *   **4**: facial recognition
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authenticationType?: number;
  /**
   * @remarks
   * The end date. Specify this parameter in the YYYYMMDD format. Example: 20220106.
   * 
   * This parameter is required.
   * 
   * @example
   * 20220106
   */
  endDate?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **Android**
   * *   **iOS**
   * 
   * @example
   * Android
   */
  osType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * FC100000038194004
   */
  sceneCode?: string;
  /**
   * @remarks
   * The start date. Specify this parameter in the YYYYMMDD format. Example: 20220101.
   * 
   * This parameter is required.
   * 
   * @example
   * 20220101
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      endDate: 'EndDate',
      osType: 'OsType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sceneCode: 'SceneCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      endDate: 'string',
      osType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sceneCode: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

