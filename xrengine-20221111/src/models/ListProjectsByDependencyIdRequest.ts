// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsByDependencyIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dependencyProjectId?: number;
  jwtToken?: string;
  mapUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  withDataset?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  withSource?: boolean;
  static names(): { [key: string]: string } {
    return {
      dependencyProjectId: 'DependencyProjectId',
      jwtToken: 'JwtToken',
      mapUuid: 'MapUuid',
      withDataset: 'WithDataset',
      withSource: 'WithSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencyProjectId: 'number',
      jwtToken: 'string',
      mapUuid: 'string',
      withDataset: 'boolean',
      withSource: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

