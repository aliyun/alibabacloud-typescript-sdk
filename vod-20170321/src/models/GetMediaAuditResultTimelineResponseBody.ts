// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd extends $dara.Model {
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **ad**: other ads.
   * *   **politics**: political content in text.
   * *   **porn**: pornographic content in text.
   * *   **abuse**: abuse in text.
   * *   **terrorism**: terrorist content in text.
   * *   **contraband**: prohibited content in text.
   * *   **spam**: spam content.
   * *   **npx**: illegal ad.
   * *   **qrcode**: QR code.
   * *   **programCode**: mini program code.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot in the ad review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The categories of undesired content review results. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture.
   * *   **smoking**: smoking.
   * *   **drivelive**: live broadcasting in a running vehicle.
   * 
   * @example
   * pip
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot in the undesirable content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **TV**: controlled TV station logo.
   * *   **trademark**: trademark.
   * 
   * @example
   * logo
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot in the logo review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The category of the review result. Valid values:
   * 
   * *   **porn**
   * *   **sexy**
   * *   **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot in the pornographic content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100.00
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The category of the review result. Valid values:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot in the terrorist content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100.00
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The collection of ad timelines.
   */
  ad?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineAd[];
  /**
   * @remarks
   * The collection of undesirable content timelines.
   */
  live?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLive[];
  /**
   * @remarks
   * The collection of logo timelines.
   */
  logo?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelineLogo[];
  /**
   * @remarks
   * The collection of pornographic content timelines.
   */
  porn?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimelinePorn[];
  /**
   * @remarks
   * The collection of terrorist content timelines.
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
   * The collection of review result timelines.
   */
  mediaAuditResultTimeline?: GetMediaAuditResultTimelineResponseBodyMediaAuditResultTimeline;
  /**
   * @remarks
   * The ID of the request.
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

