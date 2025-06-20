// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestTranscription extends $dara.Model {
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
  languageHints?: string;
  level?: string;
  roleIdentification?: boolean;
  /**
   * @example
   * 1
   */
  serviceChannel?: number;
  serviceChannelKeywords?: string[];
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
      languageHints: 'languageHints',
      level: 'level',
      roleIdentification: 'roleIdentification',
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
      languageHints: 'string',
      level: 'string',
      roleIdentification: 'boolean',
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

