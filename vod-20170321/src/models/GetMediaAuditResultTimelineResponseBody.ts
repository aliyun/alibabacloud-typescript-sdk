// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd extends $dara.Model {
  /**
   * @remarks
   * The classification of the advertisement detection result. Valid values:
   * - **normal**: normal.
   * - **ad**: other advertisements.
   * - **politics**: text contains political content.
   * - **porn**: text contains pornographic content.
   * - **abuse**: text contains abusive content.
   * - **terrorism**: text contains terrorism-related content.
   * - **contraband**: text contains prohibited content.
   * - **spam**: text contains other spam content.
   * - **npx**: psoriasis advertisements.
   * - **qrcode**: contains a QR code.
   * - **programCode**: contains a mini program code.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the advertisement detection result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video screenshot in the video. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive extends $dara.Model {
  /**
   * @remarks
   * The classification of the undesirable content detection result. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as a black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: smoking.
   * - **drivelive**: in-car live streaming.
   * 
   * @example
   * smoking
   */
  label?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the undesirable content detection result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video screenshot in the video. Unit: milliseconds.
   * 
   * @example
   * 12
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo extends $dara.Model {
  /**
   * @remarks
   * The classification of the logo detection result. Valid values:
   * - **normal**: normal.
   * - **TV**: contains a regulated logo.
   * - **trademark**: contains a trademark.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the logo detection result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video screenshot in the video. Unit: milliseconds.
   * 
   * @example
   * 13
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn extends $dara.Model {
  /**
   * @remarks
   * The classification of the pornography detection result. Valid values:
   * 
   * - **porn**: pornographic content.
   * - **sexy**: sexually suggestive content.
   * - **normal**: normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the pornography detection result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  score?: string;
  /**
   * @remarks
   * The position of the video screenshot in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism extends $dara.Model {
  /**
   * @remarks
   * The terrorism and political content detection result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody content.
   * - **explosion**: explosions and smoke.
   * - **outfit**: special attire.
   * - **logo**: special logos.
   * - **weapon**: weapons.
   * - **politics**: political content.
   * - **violence**: fighting.
   * - **crowd**: crowd gathering.
   * - **parade**: parades.
   * - **carcrash**: car accident scenes.
   * - **flag**: flags.
   * - **location**: landmarks.
   * - **others**: others.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the terrorism and political content detection result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline extends $dara.Model {
  /**
   * @remarks
   * The collection of advertisement detection timelines.
   */
  ad?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd[];
  /**
   * @remarks
   * The collection of undesirable scene timelines.
   */
  live?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive[];
  /**
   * @remarks
   * The collection of logo detection timelines.
   */
  logo?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo[];
  /**
   * @remarks
   * The collection of pornography detection timelines.
   */
  porn?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn[];
  /**
   * @remarks
   * The collection of terrorism detection timelines.
   */
  terrorism?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism[];
  static names(): { [key: string]: string } {
    return {
      ad: 'Ad',
      live: 'Live',
      logo: 'Logo',
      porn: 'Porn',
      terrorism: 'Terrorism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ad: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd },
      live: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive },
      logo: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo },
      porn: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn },
      terrorism: { 'type': 'array', 'itemType': GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineTerrorism },
    };
  }

  validate() {
    if(Array.isArray(this.ad)) {
      $dara.Model.validateArray(this.ad);
    }
    if(Array.isArray(this.live)) {
      $dara.Model.validateArray(this.live);
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    if(Array.isArray(this.porn)) {
      $dara.Model.validateArray(this.porn);
    }
    if(Array.isArray(this.terrorism)) {
      $dara.Model.validateArray(this.terrorism);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultTimelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of automated review result timelines.
   */
  mediaAuditResultTimeline?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6438BD76-D523-46FC-956F-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResultTimeline: 'MediaAuditResultTimeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResultTimeline: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaAuditResultTimeline && typeof (this.mediaAuditResultTimeline as any).validate === 'function') {
      (this.mediaAuditResultTimeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

