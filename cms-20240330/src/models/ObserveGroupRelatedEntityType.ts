// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupRelatedEntityType extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the entity.
   * 
   * @example
   * RocketMQ Topic
   */
  cnName?: string;
  /**
   * @remarks
   * The association direction, which is currently fixed as outgoing, indicating that associated entities are searched along the direct outgoing edges of the primary entity.
   * 
   * @example
   * outgoing
   */
  direction?: string;
  /**
   * @remarks
   * The entity domain.
   * 
   * @example
   * acs
   */
  domain?: string;
  /**
   * @remarks
   * The English name of the entity.
   * 
   * @example
   * RocketMQ Topic
   */
  enName?: string;
  /**
   * @remarks
   * The CommonSchema group to which the entity belongs.
   * 
   * @example
   * acs-rocketmq
   */
  entityGroup?: string;
  /**
   * @remarks
   * The direct outgoing edge relationship, such as use, run_on, calls, or contains.
   * 
   * @example
   * contains
   */
  relation?: string;
  /**
   * @remarks
   * The associated entity type.
   * 
   * @example
   * acs.rocketmq.topic
   */
  type?: string;
  /**
   * @remarks
   * The effective CommonSchema version.
   * 
   * @example
   * 0.1.14
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'cnName',
      direction: 'direction',
      domain: 'domain',
      enName: 'enName',
      entityGroup: 'entityGroup',
      relation: 'relation',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      direction: 'string',
      domain: 'string',
      enName: 'string',
      entityGroup: 'string',
      relation: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

