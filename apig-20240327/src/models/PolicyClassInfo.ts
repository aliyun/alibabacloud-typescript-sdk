// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyClassInfo extends $dara.Model {
  /**
   * @remarks
   * The alias of the policy template.
   * 
   * @example
   * Concurrency Control
   */
  alias?: string;
  /**
   * @remarks
   * The list of resource types that can be mounted.
   */
  attachableResourceTypes?: string[];
  /**
   * @remarks
   * The identifier of the policy template.
   * 
   * @example
   * pc-cpqm0s94ckt1displ8ng
   */
  classId?: string;
  /**
   * @remarks
   * The configuration example.
   * 
   * @example
   * {}
   */
  configExample?: string;
  /**
   * @remarks
   * Indicates whether the policy is deprecated.
   * 
   * @example
   * false
   */
  deprecated?: boolean;
  /**
   * @remarks
   * The detailed description of the policy template.
   * 
   * @example
   * Controls the number of concurrent threads to ensure system stability. Applicable to scenarios where internal application components or downstream dependencies become unstable, such as slow SQL queries or increased response time from downstream applications
   */
  description?: string;
  /**
   * @remarks
   * The direction in which the policy takes effect.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Indicates whether log recording is enabled.
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The execution priority.
   * 
   * @example
   * 1
   */
  executePriority?: string;
  /**
   * @remarks
   * The execution stage.
   * 
   * @example
   * POST
   */
  executeStage?: string;
  /**
   * @remarks
   * The name of the policy template.
   * 
   * @example
   * ConcurrencyLimit
   */
  name?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * FlowControl
   */
  type?: string;
  /**
   * @remarks
   * The version of the policy template.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      attachableResourceTypes: 'attachableResourceTypes',
      classId: 'classId',
      configExample: 'configExample',
      deprecated: 'deprecated',
      description: 'description',
      direction: 'direction',
      enableLog: 'enableLog',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      attachableResourceTypes: { 'type': 'array', 'itemType': 'string' },
      classId: 'string',
      configExample: 'string',
      deprecated: 'boolean',
      description: 'string',
      direction: 'string',
      enableLog: 'boolean',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachableResourceTypes)) {
      $dara.Model.validateArray(this.attachableResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

