// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartJobRequest extends $dara.Model {
  /**
   * @remarks
   * List of caller numbers
   * 
   * @example
   * 10086
   */
  callingNumber?: string[];
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * 4f21446e-324e-46f2-bf62-7f341fb004ea
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job data, which includes the following fields:
   * 
   * extras // Optional extra information
   * 
   * - key // Key for a custom variable
   * 
   * - value // Value for a custom variable
   * 
   * contacts // Required contact information for the callee
   * 
   * - phoneNumber // Required phone number of the callee
   * 
   * - referenceId // Required contact ID (user-defined) to avoid duplicate names
   * 
   * - role // Optional role of this contact in the outbound call scenario. If omitted, no role distinction is made
   * 
   * - honorific // Optional honorific for the contact
   * 
   * - name // Optional name of the contact
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 	"extras": [{
   * 		"value": "测试",
   * 		"key": "测试"
   * 	}, {
   * 		"key": "ServiceId",
   * 		"value": null
   * 	}, {
   * 		"key": "TenantId",
   * 		"value": null
   * 	}],
   * 	"contacts": [{
   * 		"phonenumber": "198********",
   * 		"name": "张三",
   * 		"priority": 5,
   * 		"referenceId": "C01"
   * 	}]
   * }
   */
  jobJson?: string;
  /**
   * @remarks
   * Scenario ID. This field supports backward compatibility with legacy outbound calling features. You can omit it.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  scenarioId?: string;
  /**
   * @remarks
   * Scenario ID (required)
   * 
   * @example
   * 1eeae263-54ca-4a52-ae14-62da58f3c473
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobJson: 'JobJson',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
      jobJson: 'string',
      scenarioId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

