// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestJobSettings } from "./UpdateDijobRequestJobSettings";
import { UpdateDIJobRequestResourceSettings } from "./UpdateDijobRequestResourceSettings";
import { UpdateDIJobRequestTableMappings } from "./UpdateDijobRequestTableMappings";
import { UpdateDIJobRequestTransformationRules } from "./UpdateDijobRequestTransformationRules";


export class UpdateDIJobRequest extends $dara.Model {
  /**
   * @deprecated
   */
  DIJobId?: number;
  description?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  id?: number;
  jobSettings?: UpdateDIJobRequestJobSettings;
  projectId?: number;
  resourceSettings?: UpdateDIJobRequestResourceSettings;
  tableMappings?: UpdateDIJobRequestTableMappings[];
  transformationRules?: UpdateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      id: 'Id',
      jobSettings: 'JobSettings',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      id: 'number',
      jobSettings: UpdateDIJobRequestJobSettings,
      projectId: 'number',
      resourceSettings: UpdateDIJobRequestResourceSettings,
      tableMappings: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTransformationRules },
    };
  }

  validate() {
    if(this.jobSettings && typeof (this.jobSettings as any).validate === 'function') {
      (this.jobSettings as any).validate();
    }
    if(this.resourceSettings && typeof (this.resourceSettings as any).validate === 'function') {
      (this.resourceSettings as any).validate();
    }
    if(Array.isArray(this.tableMappings)) {
      $dara.Model.validateArray(this.tableMappings);
    }
    if(Array.isArray(this.transformationRules)) {
      $dara.Model.validateArray(this.transformationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

