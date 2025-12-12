// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecureSuggestionResponseBodySuggestionsDetail extends $dara.Model {
  /**
   * @example
   * Malicious tampering of Web pages will affect your normal access to web page content, and may also lead to serious economic losses, brand losses, and even political risks. The webpage tamper-proof service can monitor the website directory in real time and restore the tampered files or directories through backup, so as to ensure that the website information of important systems is not tampered with maliciously and prevent the occurrence of horse hanging, black chain, illegal implantation of terrorist threats, pornography and other content.
   */
  description?: string;
  /**
   * @example
   * REINFORCE_WEB_LOCK
   */
  subType?: string;
  /**
   * @example
   * Website tamper-proofing capability not configured
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      subType: 'SubType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      subType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestions extends $dara.Model {
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  /**
   * @example
   * 40
   */
  points?: number;
  /**
   * @example
   * SS_ALARM
   */
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      points: 'Points',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestionsDetail },
      points: 'number',
      suggestType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBody extends $dara.Model {
  /**
   * @example
   * 1755744253000
   */
  calTime?: number;
  /**
   * @example
   * 676F80E3-4B3F-43DA-9CBB-5FF79F202AA2
   */
  requestId?: string;
  score?: string;
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calTime: 'CalTime',
      requestId: 'RequestId',
      score: 'Score',
      suggestions: 'Suggestions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calTime: 'number',
      requestId: 'string',
      score: 'string',
      suggestions: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.suggestions)) {
      $dara.Model.validateArray(this.suggestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

