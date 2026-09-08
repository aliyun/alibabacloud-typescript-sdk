// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClaimCallRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON string that lists the agents and their corresponding skill groups eligible to claim the call.
   * 
   * @example
   * [
   * {
   * "f0": "zeren001@report-test-2",
   * "f1": "desktop-voip-box@report-test-2"
   * }
   * ]
   */
  candidateUserListJson?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the call.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the skill group that the call is assigned to.
   * 
   * @example
   * test_sg_****@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * A unique business identifier for scheduling purposes. Subsequent event notifications include this identifier.
   * 
   * @example
   * tags
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the agent claiming the call.
   * 
   * @example
   * invoker@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateUserListJson: 'CandidateUserListJson',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateUserListJson: 'string',
      instanceId: 'string',
      jobId: 'string',
      skillGroupId: 'string',
      tags: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

