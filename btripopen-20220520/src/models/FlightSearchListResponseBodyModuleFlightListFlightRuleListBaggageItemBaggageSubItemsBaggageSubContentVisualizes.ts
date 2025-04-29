// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription } from "./FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription";
import { FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO } from "./FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDo";


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizes extends $dara.Model {
  baggageDesc?: string[];
  /**
   * @example
   * 1
   */
  baggageSubContentType?: number;
  description?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription;
  imageDO?: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO;
  /**
   * @example
   * true
   */
  isHighlight?: boolean;
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      baggageSubContentType: 'baggage_sub_content_type',
      description: 'description',
      imageDO: 'image_d_o',
      isHighlight: 'is_highlight',
      subTitle: 'sub_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: { 'type': 'array', 'itemType': 'string' },
      baggageSubContentType: 'number',
      description: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription,
      imageDO: FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO,
      isHighlight: 'boolean',
      subTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baggageDesc)) {
      $dara.Model.validateArray(this.baggageDesc);
    }
    if(this.description && typeof (this.description as any).validate === 'function') {
      (this.description as any).validate();
    }
    if(this.imageDO && typeof (this.imageDO as any).validate === 'function') {
      (this.imageDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

