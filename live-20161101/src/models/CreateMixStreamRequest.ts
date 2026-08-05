// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMixStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The webhook address. This is a JSON array. When an event occurs, the live service sends an HTTP POST request to this address. The request body contains the event details.
   * 
   * @example
   * {"CallbackUrl":"http://aliyundoc.com"}
   */
  callbackConfig?: string;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * >Notice: 
   * 
   * Currently, only domain names in the China (Shanghai) and China (Beijing) regions are supported.
   * 
   * </notice>
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The list of input streams. This is a JSON array.
   * 
   * For more information, see **InputStreamConfig** below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"LayoutChildId":1,"ResourceType":"live","ResourceValue":"rtmp://example.net/live/f2139ec2b8d6a191068cd****ea9064d?auth_key=1600947017-0-0-0b5645fe35d21a65ab92b394bd4d****","LayoutConfig":{"FillMode":"fit","PositionRefer":"topLeft","FillPositionNormalized":[0,0],"FillSizeNormalized":[1,1]}}]
   */
  inputStreamList?: string;
  /**
   * @remarks
   * The layout ID. Valid values:
   * 
   * - **MixStreamLayout-1-1**
   * - **MixStreamLayout-2-1**
   * - **MixStreamLayout-2-2**
   * - **MixStreamLayout-2-3**
   * - **MixStreamLayout-3-1**
   * - **MixStreamLayout-3-2**
   * - **MixStreamLayout-4-1**
   * - **USERDEFINED** (If you do not use a preset layout, set this parameter to **USERDEFINED**.)
   * 
   * > For more information, see [Preset stream mix layouts](https://help.aliyun.com/document_detail/199359.html).
   * 
   * This parameter is required.
   * 
   * @example
   * MixStreamLayout-1-1
   */
  layoutId?: string;
  /**
   * @remarks
   * The output configuration. This is a JSON string.
   * 
   * For more information, see **OutputConfig** below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"AppName":"liveApp****","StreamName":"9a78fb3f5c508be0122746f677a3****","MixStreamTemplate":"lp_hd_v","ExpireDuration":"86400"}
   */
  outputConfig?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackConfig: 'CallbackConfig',
      domainName: 'DomainName',
      inputStreamList: 'InputStreamList',
      layoutId: 'LayoutId',
      outputConfig: 'OutputConfig',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: 'string',
      domainName: 'string',
      inputStreamList: 'string',
      layoutId: 'string',
      outputConfig: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

