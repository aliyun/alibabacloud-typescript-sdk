// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSurveyResourcesDetailRequest extends $dara.Model {
  ip?: string;
  jobId?: number;
  projectId?: number;
  resourceType?: string;
  subProjectId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      jobId: 'jobId',
      projectId: 'projectId',
      resourceType: 'resourceType',
      subProjectId: 'subProjectId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      jobId: 'number',
      projectId: 'number',
      resourceType: 'string',
      subProjectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

