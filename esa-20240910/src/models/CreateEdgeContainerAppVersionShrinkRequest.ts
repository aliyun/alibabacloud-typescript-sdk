// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The container group to be deployed for this version, which contains information about images.\\
   * The image data contains the image address, startup command, parameters, environment variables, and probe rules. You can specify one or more images. The parameter value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "Name": "container1",
   *             "Image": "image1",
   *             "Spec": "1C2G",
   *             "Command": "/bin/sh",
   *             "Args": "-c hello",
   *             "ProbeType": "tcpSocket",
   *             "ProbeContent": "{\\"Port\\":8080}"
   *       },
   *       {
   *             "Name": "container2",
   *             "Image": "image2",
   *             "Spec": "2C4G",
   *             "ProbeType": "httpGet",
   *             "ProbeContent": "{\\"Path\\":\\"/\\",\\"Port\\":80,\\"InitialDelaySeconds\\":10}"
   *       }
   * ]
   */
  containersShrink?: string;
  /**
   * @remarks
   * The version name, which must be 6 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * verson1
   */
  name?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test app
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containersShrink: 'Containers',
      name: 'Name',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containersShrink: 'string',
      name: 'string',
      remarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

