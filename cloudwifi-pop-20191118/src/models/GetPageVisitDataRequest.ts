// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageVisitDataRequest extends $dara.Model {
  /**
   * @remarks
   * appCode
   * 
   * @example
   * 3c0837d5-e65b-11ec-9985-02420bb080c6
   */
  appCode?: string;
  /**
   * @remarks
   * appName
   * 
   * @example
   * CLOUD_NETWORK
   */
  appName?: string;
  /**
   * @remarks
   * endTime
   * 
   * @example
   * 2023-07-11
   */
  endTime?: string;
  /**
   * @remarks
   * pId
   * 
   * @example
   * 19048
   */
  PId?: string;
  /**
   * @remarks
   * startTime
   * 
   * @example
   * 2022-11-22
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      endTime: 'EndTime',
      PId: 'PId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      endTime: 'string',
      PId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

