// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRunShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * @example
   * 20000001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The parameter settings used during the actual run. The `triggerTime` parameter is required.
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The schedule resource group used when the data quality monitoring task runs. This shares the same data structure as the scheduling API.
   */
  runtimeResourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityScanId: 'DataQualityScanId',
      parametersShrink: 'Parameters',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScanId: 'number',
      parametersShrink: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

