// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMixStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The main streaming domain.
   * 
   * >  Only domain names that reside in the China (Shanghai) and China (Beijing) regions are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The input streams, in a JSON array.
   * 
   * For more information, see **InputStreamConfig**.
   * 
   * This parameter is required.
   * 
   * @example
   * {"InputStreamList":[{"LayoutConfig":{"fillSizeNormalized":[0.5,0.5],"fillPositionNormalized":[0,0],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":1,"ResourceValue":"rtmp://aliyundoc.com/caster/8564a8d1659b4dc69df5f66cf4c9****","ResourceType":"live"},{"LayoutConfig":{"fillSizeNormalized":[0.5,0.5],"fillPositionNormalized":[0.5,0],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":2,"ResourceValue":"http://developer.aliyundoc.com/3c3c25426cf744fdb90423e76b78a28a/69b1a16e2b1d423d9841bf27a96f134e-0b1cba51f58bb5ad3a854x96a2c735f****.mp4","ResourceType":"url"},{"LayoutConfig":{"fillSizeNormalized":[1,0.5],"fillPositionNormalized":[0,0.5],"positionRefer":"topLeft","fillMode":"fit"},"LayoutChildId":3,"ResourceValue":"http://aliyundoc.com/c0c6c5446b56432389e91535864938da/ed4adc5263b4474c954b95607a5350ae-fda757b3328438a8cf-4k57f373a0f0****.mp4","ResourceType":"url"}]}
   */
  inputStreamList?: string;
  /**
   * @remarks
   * The ID of the layout. Valid values:
   * 
   * *   **MixStreamLayout-1-1**
   * *   **MixStreamLayout-2-1**
   * *   **MixStreamLayout-2-2**
   * *   **MixStreamLayout-2-3**
   * *   **MixStreamLayout-3-1**
   * *   **MixStreamLayout-3-2**
   * *   **MixStreamLayout-4-1**
   * *   **USERDEFINED**: If you do not use a preset layout, set this parameter to **USERDEFINED**.
   * 
   * >  For more information, see [Preset layouts for stream mixing](https://help.aliyun.com/document_detail/199361.html).
   * 
   * @example
   * MixStreamLayout-3-2
   */
  layoutId?: string;
  /**
   * @remarks
   * The ID of the stream mixing task. If the task was created by calling the [CreateMixStream](https://help.aliyun.com/document_detail/2848087.html) operation, check the value of the response parameter MixStreamId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b2a046e-74d7-385e-d2d7-8a5b87e4****
   */
  mixStreamId?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      inputStreamList: 'InputStreamList',
      layoutId: 'LayoutId',
      mixStreamId: 'MixStreamId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      inputStreamList: 'string',
      layoutId: 'string',
      mixStreamId: 'string',
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

