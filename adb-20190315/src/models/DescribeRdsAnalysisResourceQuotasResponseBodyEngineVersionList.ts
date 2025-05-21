// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion } from "./DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion";


export class DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList extends $dara.Model {
  engineVersion?: DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion },
    };
  }

  validate() {
    if(Array.isArray(this.engineVersion)) {
      $dara.Model.validateArray(this.engineVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

