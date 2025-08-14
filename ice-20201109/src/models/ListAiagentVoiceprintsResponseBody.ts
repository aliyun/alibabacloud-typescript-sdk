// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentVoiceprintsResponseBodyVoiceprints extends $dara.Model {
  /**
   * @example
   * 2025-07-28T10:03:58.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-07-28T10:03:58.000+00:00
   */
  gmtModified?: string;
  /**
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentVoiceprintsResponseBody extends $dara.Model {
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  voiceprints?: ListAIAgentVoiceprintsResponseBodyVoiceprints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      voiceprints: 'Voiceprints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      voiceprints: { 'type': 'array', 'itemType': ListAIAgentVoiceprintsResponseBodyVoiceprints },
    };
  }

  validate() {
    if(Array.isArray(this.voiceprints)) {
      $dara.Model.validateArray(this.voiceprints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

