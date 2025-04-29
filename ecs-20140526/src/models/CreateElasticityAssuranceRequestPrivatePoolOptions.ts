// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticityAssuranceRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The type of the private pool with which you want to associate the elasticity assurance. Valid values:
   * 
   * *   Open: open private pool. If you use the elasticity assurance to create ECS instances, the open private pool that is associated with the elasticity assurance is automatically matched. If no capacity is available in the open private pool, resources in the public pool are automatically used to create the ECS instances.
   * *   Target: targeted private pool. If you use the elasticity assurance to create ECS instances, the specified private pool that is associated with the elasticity assurance is automatically matched. If no capacity is available in the private pool, the ECS instances fail to be created.
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The name of the elasticity assurance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
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

