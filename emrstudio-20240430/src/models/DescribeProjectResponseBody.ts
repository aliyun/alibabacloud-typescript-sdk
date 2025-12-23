// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is a project description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project_name
   */
  name?: string;
  /**
   * @example
   * p-3q9jo749ne5****
   */
  projectId?: string;
  /**
   * @example
   * B897B94B-6754-5D09-AB8C-2E8186CCADC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      projectId: 'projectId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      projectId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

