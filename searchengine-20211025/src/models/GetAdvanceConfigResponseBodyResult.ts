// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAdvanceConfigResponseBodyResultFiles } from "./GetAdvanceConfigResponseBodyResultFiles";


export class GetAdvanceConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content of the advanced configuration that is returned.
   * 
   * @example
   * {\\"url\\":\\"http://xxxxxx.aliyuncs.com/outnet_hz/packages/xxxxx/opensearch_offline_plugins_xxxxx.tar\\"}
   */
  content?: string;
  /**
   * @remarks
   * The type of the configuration content. Valid values: FILE, GIT, HTTP, and ODPS.
   * 
   * @example
   * FILE
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the advanced configuration.
   * 
   * @example
   * close alarm, chiji id 37080
   */
  desc?: string;
  /**
   * @remarks
   * The files.
   */
  files?: GetAdvanceConfigResponseBodyResultFiles[];
  /**
   * @remarks
   * The name of the advanced configuration.
   * 
   * @example
   * ha-cn-0ju2s170b03_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the advanced configuration. Valid values: drafting: The advanced configuration is in the draft state. used: The advanced configuration is being used. unused: The advanced configuration is not used. trash: The advanced configuration is being deleted.
   * 
   * @example
   * 0,1,3,6,8
   */
  status?: string;
  /**
   * @remarks
   * The time when the advanced configuration was updated.
   * 
   * @example
   * ""
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      desc: 'string',
      files: { 'type': 'array', 'itemType': GetAdvanceConfigResponseBodyResultFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

