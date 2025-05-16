// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsErrorCountResponseProjectData } from "./OralEvaluationStatisticsErrorCountResponseProjectData";


export class OralEvaluationStatisticsErrorCountResponse extends $dara.Model {
  projectData?: OralEvaluationStatisticsErrorCountResponseProjectData;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectData: 'ProjectData',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectData: OralEvaluationStatisticsErrorCountResponseProjectData,
      projectId: 'string',
    };
  }

  validate() {
    if(this.projectData && typeof (this.projectData as any).validate === 'function') {
      (this.projectData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

