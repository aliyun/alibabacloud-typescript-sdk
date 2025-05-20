// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVLExtractionResultResponseBodyDataKvListInfoContextConfidence } from "./GetVlextractionResultResponseBodyDataKvListInfoContextConfidence";
import { ContentItem } from "./ContentItem";


export class GetVLExtractionResultResponseBodyDataKvListInfoContext extends $dara.Model {
  /**
   * @remarks
   * Confidence
   */
  confidence?: GetVLExtractionResultResponseBodyDataKvListInfoContextConfidence;
  /**
   * @remarks
   * Key recall information details
   */
  key?: ContentItem[];
  /**
   * @remarks
   * Value Recall Information
   */
  value?: ContentItem[];
  static names(): { [key: string]: string } {
    return {
      confidence: 'confidence',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: GetVLExtractionResultResponseBodyDataKvListInfoContextConfidence,
      key: { 'type': 'array', 'itemType': ContentItem },
      value: { 'type': 'array', 'itemType': ContentItem },
    };
  }

  validate() {
    if(this.confidence && typeof (this.confidence as any).validate === 'function') {
      (this.confidence as any).validate();
    }
    if(Array.isArray(this.key)) {
      $dara.Model.validateArray(this.key);
    }
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

