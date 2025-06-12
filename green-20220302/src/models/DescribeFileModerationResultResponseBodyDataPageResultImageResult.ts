// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult } from "./DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult";
import { DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation } from "./DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation";


export class DescribeFileModerationResultResponseBodyDataPageResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The label information.
   */
  labelResult?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult[];
  /**
   * @remarks
   * The location information
   */
  location?: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The moderation service.
   * 
   * @example
   * baselineCheck
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labelResult: 'LabelResult',
      location: 'Location',
      riskLevel: 'RiskLevel',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labelResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult },
      location: DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation,
      riskLevel: 'string',
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelResult)) {
      $dara.Model.validateArray(this.labelResult);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

