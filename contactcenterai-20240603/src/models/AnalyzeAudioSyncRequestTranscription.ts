// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeAudioSyncRequestTranscription extends $dara.Model {
  /**
   * @example
   * nls
   */
  asrModelCode?: string;
  /**
   * @example
   * 1
   */
  autoSplit?: number;
  /**
   * @example
   * 1
   */
  clientChannel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sss.mp3
   */
  fileName?: string;
  /**
   * @example
   * low
   */
  level?: string;
  /**
   * @example
   * 1
   */
  serviceChannel?: number;
  serviceChannelKeywords?: string[];
  /**
   * @example
   * esnvknv*****skdnvjksd
   */
  vocabularyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://1111.com/sss.mp3
   */
  voiceFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      asrModelCode: 'asrModelCode',
      autoSplit: 'autoSplit',
      clientChannel: 'clientChannel',
      fileName: 'fileName',
      level: 'level',
      serviceChannel: 'serviceChannel',
      serviceChannelKeywords: 'serviceChannelKeywords',
      vocabularyId: 'vocabularyId',
      voiceFileUrl: 'voiceFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelCode: 'string',
      autoSplit: 'number',
      clientChannel: 'number',
      fileName: 'string',
      level: 'string',
      serviceChannel: 'number',
      serviceChannelKeywords: { 'type': 'array', 'itemType': 'string' },
      vocabularyId: 'string',
      voiceFileUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceChannelKeywords)) {
      $dara.Model.validateArray(this.serviceChannelKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

