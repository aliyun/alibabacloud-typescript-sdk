// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData } from "./OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData";


export class OralEvaluationStatisticsErrorCountResponseProjectData extends $dara.Model {
  applicationData?: OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData[];
  /**
   * @remarks
   * This parameter is required.
   */
  applicationInternalId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationData: 'ApplicationData',
      applicationInternalId: 'applicationInternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationData: { 'type': 'array', 'itemType': OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData },
      applicationInternalId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationData)) {
      $dara.Model.validateArray(this.applicationData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

