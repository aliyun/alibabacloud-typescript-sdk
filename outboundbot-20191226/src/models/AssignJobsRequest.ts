// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignJobsRequest extends $dara.Model {
  callingNumber?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12f3dd08-0c55-44ce-9b64-e69d35ed3a76
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  isAsynchrony?: boolean;
  /**
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobGroupId?: string;
  jobsJson?: string[];
  /**
   * @example
   * json
   */
  rosterType?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      isAsynchrony: 'IsAsynchrony',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupId: 'JobGroupId',
      jobsJson: 'JobsJson',
      rosterType: 'RosterType',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      isAsynchrony: 'boolean',
      jobDataParsingTaskId: 'string',
      jobGroupId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      rosterType: 'string',
      strategyJson: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    if(Array.isArray(this.jobsJson)) {
      $dara.Model.validateArray(this.jobsJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

