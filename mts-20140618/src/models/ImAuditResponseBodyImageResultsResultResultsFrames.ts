// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsFrames extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. A higher confidence level indicates higher reliability of the moderation result. We recommend that you do not use this score in your business.
   * 
   * @example
   * 89.85
   */
  rate?: number;
  /**
   * @remarks
   * The temporary access URL of the truncated frame. The URL is valid for 5 minutes.
   * 
   * @example
   * http://example.com/test-01.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      rate: 'rate',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rate: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

