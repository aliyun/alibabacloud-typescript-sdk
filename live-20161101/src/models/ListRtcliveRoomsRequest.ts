// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRTCLiveRoomsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  appId?: string;
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

