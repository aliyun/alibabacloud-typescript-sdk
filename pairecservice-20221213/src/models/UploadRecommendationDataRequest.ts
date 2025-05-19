// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadRecommendationDataRequestContent } from "./UploadRecommendationDataRequestContent";


export class UploadRecommendationDataRequest extends $dara.Model {
  regionId?: string;
  content?: UploadRecommendationDataRequestContent[];
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      content: 'Content',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      content: { 'type': 'array', 'itemType': UploadRecommendationDataRequestContent },
      dataType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

