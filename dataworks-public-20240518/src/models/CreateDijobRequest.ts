// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestDestinationDataSourceSettings } from "./CreateDijobRequestDestinationDataSourceSettings";
import { CreateDIJobRequestJobSettings } from "./CreateDijobRequestJobSettings";
import { CreateDIJobRequestResourceSettings } from "./CreateDijobRequestResourceSettings";
import { CreateDIJobRequestSourceDataSourceSettings } from "./CreateDijobRequestSourceDataSourceSettings";
import { CreateDIJobRequestTableMappings } from "./CreateDijobRequestTableMappings";
import { CreateDIJobRequestTransformationRules } from "./CreateDijobRequestTransformationRules";


export class CreateDIJobRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceSettings?: CreateDIJobRequestDestinationDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   */
  destinationDataSourceType?: string;
  /**
   * @deprecated
   */
  jobName?: string;
  jobSettings?: CreateDIJobRequestJobSettings;
  jobType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  migrationType?: string;
  name?: string;
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSettings?: CreateDIJobRequestResourceSettings;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceSettings?: CreateDIJobRequestSourceDataSourceSettings[];
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMappings?: CreateDIJobRequestTableMappings[];
  transformationRules?: CreateDIJobRequestTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationDataSourceSettings: 'DestinationDataSourceSettings',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobSettings: 'JobSettings',
      jobType: 'JobType',
      migrationType: 'MigrationType',
      name: 'Name',
      projectId: 'ProjectId',
      resourceSettings: 'ResourceSettings',
      sourceDataSourceSettings: 'SourceDataSourceSettings',
      sourceDataSourceType: 'SourceDataSourceType',
      tableMappings: 'TableMappings',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestDestinationDataSourceSettings },
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobSettings: CreateDIJobRequestJobSettings,
      jobType: 'string',
      migrationType: 'string',
      name: 'string',
      projectId: 'number',
      resourceSettings: CreateDIJobRequestResourceSettings,
      sourceDataSourceSettings: { 'type': 'array', 'itemType': CreateDIJobRequestSourceDataSourceSettings },
      sourceDataSourceType: 'string',
      tableMappings: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappings },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTransformationRules },
    };
  }

  validate() {
    if(Array.isArray(this.destinationDataSourceSettings)) {
      $dara.Model.validateArray(this.destinationDataSourceSettings);
    }
    if(this.jobSettings && typeof (this.jobSettings as any).validate === 'function') {
      (this.jobSettings as any).validate();
    }
    if(this.resourceSettings && typeof (this.resourceSettings as any).validate === 'function') {
      (this.resourceSettings as any).validate();
    }
    if(Array.isArray(this.sourceDataSourceSettings)) {
      $dara.Model.validateArray(this.sourceDataSourceSettings);
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

