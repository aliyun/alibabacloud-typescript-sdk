// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizChainDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  ioTDataDID?: string;
  memberId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  num?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      endTime: 'EndTime',
      ioTDataDID: 'IoTDataDID',
      memberId: 'MemberId',
      num: 'Num',
      regionId: 'RegionId',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      endTime: 'number',
      ioTDataDID: 'string',
      memberId: 'string',
      num: 'number',
      regionId: 'string',
      size: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

