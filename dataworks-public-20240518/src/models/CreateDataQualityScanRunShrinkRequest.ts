// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRunShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data quality scan ID.
   * 
   * @example
   * 20000001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The parameters for the run. The `triggerTime` parameter is required.
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
   * Specifies the scheduling resource group used to run the data quality scan. This object uses the same data structure as the scheduling API.
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

