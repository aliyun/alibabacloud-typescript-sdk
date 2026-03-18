// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 230
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-02
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

export class OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataData extends $dara.Model {
  data?: OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData[];
  /**
   * @example
   * 51000
   */
  errorCode?: string;
  /**
   * @example
   * start the core unsuccessfull.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataDataData },
      errorCode: 'string',
      errorMessage: 'string',
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

export class OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData extends $dara.Model {
  data?: OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataData[];
  /**
   * @remarks
   * appId,appkey
   * 
   * This parameter is required.
   * 
   * @example
   * t000797
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
      data: { 'type': 'array', 'itemType': OralEvaluationStatisticsErrorCountResponseProjectDataApplicationDataData },
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

export class OralEvaluationStatisticsErrorCountResponseProjectData extends $dara.Model {
  applicationData?: OralEvaluationStatisticsErrorCountResponseProjectDataApplicationData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
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

export class OralEvaluationStatisticsErrorCountResponse extends $dara.Model {
  projectData?: OralEvaluationStatisticsErrorCountResponseProjectData;
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

