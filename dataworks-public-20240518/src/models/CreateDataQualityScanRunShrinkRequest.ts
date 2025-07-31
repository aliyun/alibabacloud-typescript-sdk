// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRunShrinkRequest extends $dara.Model {
  dataQualityScanId?: number;
  parametersShrink?: string;
  projectId?: number;
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

