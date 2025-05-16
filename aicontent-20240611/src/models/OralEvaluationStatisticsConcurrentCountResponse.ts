// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsConcurrentCountResponseProjectData } from "./OralEvaluationStatisticsConcurrentCountResponseProjectData";


export class OralEvaluationStatisticsConcurrentCountResponse extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  projectData?: OralEvaluationStatisticsConcurrentCountResponseProjectData;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectData: 'projectData',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectData: OralEvaluationStatisticsConcurrentCountResponseProjectData,
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

