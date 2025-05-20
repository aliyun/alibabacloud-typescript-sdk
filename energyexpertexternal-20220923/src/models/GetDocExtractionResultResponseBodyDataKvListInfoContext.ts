// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence } from "./GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence";
import { ContentItem } from "./ContentItem";


export class GetDocExtractionResultResponseBodyDataKvListInfoContext extends $dara.Model {
  /**
   * @remarks
   * Confidence level
   */
  confidence?: GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence;
  /**
   * @remarks
   * Details of key recall information
   */
  key?: ContentItem[];
  /**
   * @remarks
   * Details of value recall information
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
      confidence: GetDocExtractionResultResponseBodyDataKvListInfoContextConfidence,
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

