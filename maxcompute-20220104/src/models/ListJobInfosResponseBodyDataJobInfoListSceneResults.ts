// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfosResponseBodyDataJobInfoListSceneResults extends $dara.Model {
  /**
   * @remarks
   * The intelligent diagnostics result description.
   * 
   * @example
   * This job uses annual and monthly computing resources. It may be that the job is waiting for resources due to the large amount of overall job running data, many resources requested, and low job priority. Please go to Resource Consumption to view the specific situation. You can also go to Cost Optimization to see if you need to adjust resource configuration.
   */
  description?: string;
  /**
   * @remarks
   * Information about the nodes where data skew or data expansion is detected. This parameter is returned only when the diagnostics scenario is data skew or data expansion.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The intelligent diagnostics result scenario.
   * 
   * @example
   * LackResource
   */
  scene?: string;
  /**
   * @remarks
   * The intelligent diagnostics result tag.
   * 
   * @example
   * SubscriptionLackResource
   */
  sceneTag?: string;
  /**
   * @remarks
   * The intelligent diagnostics result summary.
   * 
   * @example
   * Insufficient computing resources available for the job. Click to view details.
   */
  summary?: string;
  /**
   * @remarks
   * The intelligent diagnostics result type.
   * 
   * @example
   * warning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      params: 'params',
      scene: 'scene',
      sceneTag: 'sceneTag',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      sceneTag: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

