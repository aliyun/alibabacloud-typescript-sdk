// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResourceResponseBodyModuleInfo extends $dara.Model {
  /**
   * @remarks
   * The concatenated logical IDs of one or more modules that contain the resource. The modules are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from Module B nested within Parent Module A:
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated types of one or more modules that contain the resource. The module types are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type that is nested within a parent module of the `MODULE::ROS::Parent::Example` type:
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
   * 
   * @example
   * MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example
   */
  typeHierarchy?: string;
  static names(): { [key: string]: string } {
    return {
      logicalIdHierarchy: 'LogicalIdHierarchy',
      typeHierarchy: 'TypeHierarchy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalIdHierarchy: 'string',
      typeHierarchy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

