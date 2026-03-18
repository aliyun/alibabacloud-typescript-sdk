// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsCallsCountResponseProjectDataApplicationDataData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-01
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData extends $dara.Model {
  data?: OralEvaluationStatisticsCallsCountResponseProjectDataApplicationDataData[];
  /**
   * @remarks
   * appkey
   * 
   * This parameter is required.
   * 
   * @example
   * a0007g7
   */
  applicationAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      applicationAccessId: 'applicationAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OralEvaluationStatisticsCallsCountResponseProjectDataApplicationDataData },
      applicationAccessId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OralEvaluationStatisticsCallsCountResponseProjectData extends $dara.Model {
  applicationData?: OralEvaluationStatisticsCallsCountResponseProjectDataApplicationData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
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

export class OralEvaluationStatisticsCallsCountResponse extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  projectData?: OralEvaluationStatisticsCallsCountResponseProjectData;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
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
      projectData: OralEvaluationStatisticsCallsCountResponseProjectData,
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

