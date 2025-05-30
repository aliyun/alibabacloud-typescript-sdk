// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageResponseBodyDataAllowedProjectList extends $dara.Model {
  /**
   * @remarks
   * The security level for sensitive data.
   * 
   * @example
   * 2
   */
  label?: string;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * proejctB
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

