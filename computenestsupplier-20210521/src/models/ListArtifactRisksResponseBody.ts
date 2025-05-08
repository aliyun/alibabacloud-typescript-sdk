// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListArtifactRisksResponseBodyArtifactRiskList } from "./ListArtifactRisksResponseBodyArtifactRiskList";


export class ListArtifactRisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of artifact risks
   */
  artifactRiskList?: ListArtifactRisksResponseBodyArtifactRiskList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 52919DB1-03A0-55F5-BDD4-DB6DEBB8267A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactRiskList: 'ArtifactRiskList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactRiskList: { 'type': 'array', 'itemType': ListArtifactRisksResponseBodyArtifactRiskList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifactRiskList)) {
      $dara.Model.validateArray(this.artifactRiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

