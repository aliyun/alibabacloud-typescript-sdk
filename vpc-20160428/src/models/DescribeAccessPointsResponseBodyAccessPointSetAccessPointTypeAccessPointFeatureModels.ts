// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel } from "./DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel";


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels extends $dara.Model {
  accessPointFeatureModel?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel[];
  static names(): { [key: string]: string } {
    return {
      accessPointFeatureModel: 'AccessPointFeatureModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointFeatureModel: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel },
    };
  }

  validate() {
    if(Array.isArray(this.accessPointFeatureModel)) {
      $dara.Model.validateArray(this.accessPointFeatureModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

