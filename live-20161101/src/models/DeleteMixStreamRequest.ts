// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMixStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The domain name of the output stream.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the stream mixing task. Obtain this ID from the MixStreamId parameter returned by the [CreateMixStream](https://help.aliyun.com/document_detail/2848087.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 749b7594-86d6-37b1-513b-e1e19845****
   */
  mixStreamId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the output stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      mixStreamId: 'MixStreamId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      mixStreamId: 'string',
      ownerId: 'number',
      regionId: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

