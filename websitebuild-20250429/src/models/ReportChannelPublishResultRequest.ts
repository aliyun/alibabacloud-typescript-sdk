// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportChannelPublishResultRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the publishing account. A null value does not overwrite the original value. Maximum length: 256 characters.
   * 
   * @example
   * xx
   */
  channelAccountName?: string;
  /**
   * @remarks
   * The channel draft ID.
   * 
   * This parameter is required.
   * 
   * @example
   * draft-789
   */
  draftId?: string;
  /**
   * @remarks
   * The ID returned by the platform. Set this parameter when the publishing is successful.
   * 
   * @example
   * 5467410713875420090
   */
  externalId?: string;
  /**
   * @remarks
   * The redirect URL of the platform.
   * 
   * @example
   * https://hf-groot.lingostarcdn.com/sparkenglish-sv/groot-parent/1-698a94b7-133b20ab-42ae793d40f6/05a0caf1-abb0-415d-941c-eecf0b613eae.mp4
   */
  externalUrl?: string;
  /**
   * @remarks
   * The failure reason. Set this parameter when the publishing fails.
   * 
   * @example
   * xxx
   */
  failReason?: string;
  /**
   * @remarks
   * Specifies whether the publishing is successful (true/false).
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelAccountName: 'ChannelAccountName',
      draftId: 'DraftId',
      externalId: 'ExternalId',
      externalUrl: 'ExternalUrl',
      failReason: 'FailReason',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelAccountName: 'string',
      draftId: 'string',
      externalId: 'string',
      externalUrl: 'string',
      failReason: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

