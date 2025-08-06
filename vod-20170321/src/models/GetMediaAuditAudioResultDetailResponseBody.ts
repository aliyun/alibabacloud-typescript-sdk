// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList extends $dara.Model {
  /**
   * @remarks
   * The end time of the audio that failed the review. Unit: seconds.
   * 
   * @example
   * 10
   */
  endTime?: number;
  /**
   * @remarks
   * The review results. Valid values:
   * *   **spam**
   * *   **ad**
   * *   **abuse**
   * *   **flood**
   * *   **contraband**
   * *   **meaningless**
   * *   **normal**
   * 
   * @example
   * abuse
   */
  label?: string;
  /**
   * @remarks
   * The start time of the audio that failed the review. Unit: seconds.
   * 
   * @example
   * 8
   */
  startTime?: number;
  /**
   * @remarks
   * The text that corresponds to the audio.
   * 
   * @example
   * beauty
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      label: 'Label',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      label: 'string',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail extends $dara.Model {
  /**
   * @remarks
   * The list of results.
   */
  list?: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageTotal?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageTotal: 'PageTotal',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetailList },
      pageTotal: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditAudioResultDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of review results.
   */
  mediaAuditAudioResultDetail?: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB7D7232-1AB2-40FE-B8D3-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditAudioResultDetail: 'MediaAuditAudioResultDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditAudioResultDetail: GetMediaAuditAudioResultDetailResponseBodyMediaAuditAudioResultDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaAuditAudioResultDetail && typeof (this.mediaAuditAudioResultDetail as any).validate === 'function') {
      (this.mediaAuditAudioResultDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

