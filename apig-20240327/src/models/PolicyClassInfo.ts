// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyClassInfo extends $dara.Model {
  /**
   * @remarks
   * The template alias.
   * 
   * @example
   * Rate Limit
   */
  alias?: string;
  /**
   * @remarks
   * The list of resource types that can be mounted.
   */
  attachableResourceTypes?: string[];
  /**
   * @remarks
   * The template identifier.
   * 
   * @example
   * pc-cpqm0s94ckt1displ8ng
   */
  classId?: string;
  /**
   * @remarks
   * A configuration example.
   * 
   * @example
   * {}
   */
  configExample?: string;
  /**
   * @remarks
   * Specifies whether the policy has been deprecated.
   * 
   * @example
   * false
   */
  deprecated?: boolean;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Limits the number of requests per unit of time
   */
  description?: string;
  /**
   * @remarks
   * The direction of traffic on which the policy takes effect.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to enable logging.
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
   * The execution phase.
   * 
   * @example
   * POST
   */
  executeStage?: string;
  /**
   * @remarks
   * The template name.
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
   * The template version.
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

