// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData } from "./OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData";


export class OralEvaluationStatisticsCallsCountResponseProjectData extends $dara.Model {
  applicationData?: OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData[];
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
      applicationData: { 'type': 'array', 'itemType': OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData },
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

